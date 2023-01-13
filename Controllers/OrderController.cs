using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BoostingService.Models.ViewModel;
using BoostingService.Models;
using BoostingService.Context;
using Microsoft.CodeAnalysis;

namespace BoostingService.Controllers
{
    [ApiController]
    [Route("api/order")]
    public class OrderController : ControllerBase
    {
        private readonly BoostContext _context;

        public OrderController(BoostContext context)
        {
            _context = context;
        }

        [HttpPost("create")]
        public Order createNewOrder(OrderViewModel viewOrder)
        {
            var client = _context.Users.Where(u => u.email == viewOrder.email).OrderBy(u => u.id).First();
            var service = _context.Services.Where(s => s.name == viewOrder.service).OrderBy(s => s.id).First();


            var order = new Order()
            {
                user = client,
                service = service,
                startMMR = viewOrder.startMMR,
                endMMR = viewOrder.endMMR,
                countLP = viewOrder.countLP,
                cost = (int)viewOrder.cost,
                status = "Ожидает подтверждения",
                dateOfCreate = DateTime.Now
            };

            _context.Orders.Add(order);
            _context.SaveChanges();

            return order;
        }

        [HttpGet("isUserHasOrders")]
        public bool isUserHasOrders(string email)
        {
            var user = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).First();
            if (user.role == "user")
            {
                var countActualOrders = _context.Orders.Where(o => o.user == user && o.status != "Выполнен" && o.status != "Отменен").Count();
                return (countActualOrders > 0);
            }
            else if (user.role == "booster")
            {
                var countActualOrders = _context.Orders.Where(o => o.booster == user && o.status != "Выполнен" && o.status != "Отменен").Count();
                return (countActualOrders > 0);
            }
            else return false;

        }
    }
}