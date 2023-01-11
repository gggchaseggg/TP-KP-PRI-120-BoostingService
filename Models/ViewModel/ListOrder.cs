using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BoostingService.Models.ViewModel
{
    public class ListOrder
    {
        public int id { get; set; }
        public int startMMR { get; set; }
        public int endMMR { get; set; }
        public int countLP { get; set; }
        public int cost { get; set; }
        public string status { get; set; }
    }
}
