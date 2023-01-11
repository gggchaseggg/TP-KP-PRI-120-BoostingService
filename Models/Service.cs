using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BoostingService.Models
{
    public class Service
    {
        public int id { get; set; }
        public string name { get; set; }
        public int cost { get; set; }
        public int discount { get; set; }
    }
}
