using System.ComponentModel.DataAnnotations;

namespace CayanoteAPI.Models
{
    public record Board
    {
        
        public int Id { get; set; }
        public string? Name { get; set; }
        [Key]
        public Dictionary<int, string>? Components { get; set; }
    }
}
