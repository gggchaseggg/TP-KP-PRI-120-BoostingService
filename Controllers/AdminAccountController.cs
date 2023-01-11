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
    [Route("api/admin")]
    public class AdminAccountController : ControllerBase
    {
        private readonly BoostContext _context;

        public AdminAccountController(BoostContext context)
        {
            _context = context;
        }

        [HttpGet("blockUser")]
        public User blockUserByEmail(string email)
        {
            var userForBlock = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).First();
            userForBlock.role = "block";

            _context.SaveChanges();

            return new User()
            {
                id = userForBlock.id,
                nickname = userForBlock.nickname,
                email = userForBlock.email,
                phone = userForBlock.phone,
                password = null,
                role = userForBlock.role
            };
        }

        [HttpGet("unblockUser")]
        public User unblockUserByEmail(string email)
        {
            var userForUnblock = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).First();
            userForUnblock.role = "user";

            _context.SaveChanges();

            return new User()
            {
                id = userForUnblock.id,
                nickname = userForUnblock.nickname,
                email = userForUnblock.email,
                phone = userForUnblock.phone,
                password = null,
                role = userForUnblock.role
            };
        }

        [HttpGet("setrolebooster")]
        public User setBoosterRole(string email)
        {
            var booster = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).First();
            booster.role = "booster";

            _context.SaveChanges();

            return new User()
            {
                id = booster.id,
                nickname = booster.nickname,
                email = booster.email,
                phone = booster.phone,
                password = null,
                role = booster.role
            };
        }
    }
}