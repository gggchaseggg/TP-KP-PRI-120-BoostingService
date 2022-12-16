using BoostingService.Models;
using Microsoft.EntityFrameworkCore;

namespace BoostingService.Context
{
    public class BoostContext: DbContext 
    {
        public BoostContext(DbContextOptions<BoostContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
    }
}
