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
    [Route("api/booster")]
    public class BoostController: ControllerBase
    {

        private readonly BoostContext _context;
        public BoostController(BoostContext context)
        {
            _context = context;
        }


        [HttpGet("getBoosterInfo")]
        public ViewUserModel getOrderInfo(string email)
        {

            var boostid = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).First().id;
            var userFromDB = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).FirstOrDefault();

            var orders = _context.Orders
                .Where(u => u.booster == userFromDB)
                .OrderByDescending(u => u.dateOfCreate)
                .Take(10)
                .ToList();

            List<ListOrder> viewListOrders = new List<ListOrder>();

            foreach (Order order in orders) viewListOrders.Add(
                    new ListOrder {
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

        [HttpGet("getNewBoosterInfo")]
        public ViewUserModel getNewOrderInfo(string email)
        {

            var boostid = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).First().id;
            var userFromDB = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).FirstOrDefault();

            var orders = _context.Orders
                .Where(u => u.status == "Ожидает подтверждения")
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

        [HttpGet("getNewOrder")]
        public ListOrder getNewOrder(string email, int orderid)
        {

            var boosterFromDB = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).FirstOrDefault();


            var order = _context.Orders
                .Where(u => u.id == orderid)
                .FirstOrDefault();

            List<ListOrder> viewListOrders = new List<ListOrder>();

            order.booster = boosterFromDB;
            order.status = "Ожидает оплаты";
            _context.SaveChanges();

            return new ListOrder()
            {
                id = order.id,
                startMMR = order.startMMR,
                endMMR = order.endMMR,
                countLP = order.countLP,
                cost = order.cost,
                status = order.status
            };
        }

        [HttpGet("getOrderStatusCancel")]
        public ListOrder getOrderStatusCancel(string email, int orderid)
        {

            var boosterFromDB = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).FirstOrDefault();


            var order = _context.Orders
                .Where(u => u.id == orderid)
                .FirstOrDefault();

            List<ListOrder> viewListOrders = new List<ListOrder>();

            order.booster = boosterFromDB;
            order.status = "Отменен";
            _context.SaveChanges();

            return new ListOrder()
            {
                id = order.id,
                startMMR = order.startMMR,
                endMMR = order.endMMR,
                countLP = order.countLP,
                cost = order.cost,
                status = order.status
            };
        }

        [HttpGet("check")]
        public ListOrder checkOrder(string email)
        {

            var userid = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).First().id;
            var userFromDB = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).FirstOrDefault();

            var orders = _context.Orders
                .Where(u => u.status != "Выполнен" && u.status != "Отменен" && u.booster == userFromDB)
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

        [HttpGet("getStatusComplete")]
        public ListOrder getStatusComplete(string email)
        {

            var userid = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).First().id;
            var userFromDB = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).FirstOrDefault();

            var orders = _context.Orders
                .Where(u => u.status != "Выполнен" && u.status != "Отменен" && u.booster == userFromDB)
                .FirstOrDefault();

            orders.status = "Выполнен";
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
