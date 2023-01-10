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
    [Route("api/account")]
    public class AccountController : ControllerBase
    {    
        private readonly BoostContext _context;

        public AccountController(BoostContext context)
        {
            _context = context;
        }

        [HttpGet("getUserInfo")]
        public User getUserInfo(string email)
        {
            var userFromDB = _context.Users.Where(u => u.email == email).OrderBy(u => u.id).FirstOrDefault();
            return new User(){id = userFromDB.id, nickname = userFromDB.nickname, email = userFromDB.email,
                phone = userFromDB.phone, password = null, role = userFromDB.role };
        }
        [HttpGet("getnickname/{email}")]
        public string getUserNicknameByEmail(string email)
        {
            return _context.Users.Where(u => u.email == email).OrderBy(u => u.id).First().nickname;
        }

        [HttpGet("existsemail")]
        public bool getUserByEmail(string email)
        {
            return _context.Users.Where(a => a.email == email).ToList().Count == 0;
        }

        [HttpPost("login")]
        public string login(LoginModel model)
        {
            var role = _context.Users.Where(a => a.email == model.logEmail && a.password == model.logPassword).ToList();
            return role.Count != 0 ? role.Last().role : "err";
        }

        [HttpPost("register")]
        public User register(RegisterModel model)
        {
            User user = new User(
                model.regNickname,
                model.regEmail,
                model.regPhone,
                model.regPassword);

            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }
    }
}
