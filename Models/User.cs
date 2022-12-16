using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BoostingService.Models
{
    public class User
    {
        public int id { get; set; }
        public string nickname { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public string password { get; set; }
        public string role { get; set; }

        public User(string nickname, string email, string password, string phone, string role = "user")
        {
            this.nickname = nickname;
            this.email = email;
            this.password = password;
            this.phone = phone;
            this.role = role;
        }
    }
}
