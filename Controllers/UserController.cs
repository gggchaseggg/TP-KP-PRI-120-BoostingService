using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BoostingService.Models.ViewModel;
using BoostingService.Models;
using BoostingService.Context;

namespace BoostingService.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ControllerBase
    {

        private readonly BoostContext _context;
        public UserController(BoostContext context)
        {
            _context = context;
        }


        [HttpGet("getUserInfo")]
        public ViewUserModel getUserInfo(string email)
        {

            var userFromDB = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).FirstOrDefault();

            var orders = _context.Orders
                .Where(u => u.user == userFromDB)
                .ToList();

            List<ListOrder> viewListOrders = new List<ListOrder>();

            foreach (Order order in orders) viewListOrders.Add(
                    new ListOrder
                    {
                        id = order.id,
                        startMMR = order.startMMR,
                        endMMR = order.endMMR,
                        countLP = order.countLP,
                        cost = order.cost,
                        status = order.status
                    }
                    );



            return new ViewUserModel()
            {
                nickname = userFromDB.nickname,
                email = userFromDB.email,
                phone = userFromDB.phone,
                orders = viewListOrders
            };
        }

        [HttpGet("getNewOrderInfo")]
        public ListOrder getNewOrderInfo(string email)
        {

            var userid = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).First().id;
            var userFromDB = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).FirstOrDefault();

            var orders = _context.Orders
                .Where(u => u.status != "Выполнен" && u.status != "Отменен" && u.user == userFromDB)
                .FirstOrDefault();

            if (orders is null) return null;

            return new ListOrder()
            {
                id = orders.id,
                startMMR = orders.startMMR,
                endMMR = orders.endMMR,
                countLP = orders.countLP,
                cost = orders.cost,
                status = orders.status
            };
        }

        [HttpGet("getStatusInProcess")]
        public ListOrder getStatusInProcess(string email)
        {

            var userid = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).First().id;
            var userFromDB = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).FirstOrDefault();

            var orders = _context.Orders
                .Where(u => u.status != "Выполнен" && u.status != "Отменен" && u.user == userFromDB)
                .FirstOrDefault();

            orders.status = "Выполняется";
            _context.SaveChanges();

            return new ListOrder()
            {
                id = orders.id,
                startMMR = orders.startMMR,
                endMMR = orders.endMMR,
                countLP = orders.countLP,
                cost = orders.cost,
                status = orders.status
            };
        }

        [HttpGet("getStatusDelete")]
        public ListOrder getStatusDelete(string email)
        {

            var userid = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).First().id;
            var userFromDB = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).FirstOrDefault();

            var orders = _context.Orders
                .Where(u => u.status != "Выполнен" && u.status != "Отменен" && u.user == userFromDB)
                .FirstOrDefault();

            orders.status = "Отменен";
            _context.SaveChanges();

            return new ListOrder()
            {
                id = orders.id,
                startMMR = orders.startMMR,
                endMMR = orders.endMMR,
                countLP = orders.countLP,
                cost = orders.cost,
                status = orders.status
            };
        }
    }
}