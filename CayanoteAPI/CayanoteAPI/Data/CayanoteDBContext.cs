using CayanoteAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CayanoteAPI.Data
{
    public class CayanoteDBContext : DbContext
    {
        public CayanoteDBContext(DbContextOptions<CayanoteDBContext> options) : base(options)   
        {

        }
        public DbSet<Board> Boards { get; set; }
        public DbSet<Container> Containers { get; set; }
        public DbSet<Note> Notes { get; set; }
        public DbSet<Photo> Photos { get; set; }


    }
}
