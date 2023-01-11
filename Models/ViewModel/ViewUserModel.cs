using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BoostingService.Models.ViewModel
{
    public class ViewUserModel
    {
        public string nickname { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public List<ListOrder> orders { get; set; }
    }
}
