using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BoostingService.Models
{
    public class Order
    {
        public int id { get; set; }
        public int? idUser { get; set; }
        public User? user { get; set; }
        public int? idBooster { get; set; }
        public User? booster { get; set; }
        public int? idService { get; set; }
        public Service? service { get; set; }
        public DateTime dateOfCreate { get; set; }
        public int startMMR { get; set; }
        public int endMMR { get; set; }
        public int countLP { get; set; }
        public int cost { get; set; }
        public string status { get; set; }
    }
}
