namespace BoostingService.Models.ViewModel
{
    public class OrderViewModel
    {
        public string email { get; set; }
        public string service { get; set; }
        public int startMMR { get; set; }
        public int endMMR { get; set; }
        public int countLP { get; set; }
        public float cost { get; set; }
    }
}