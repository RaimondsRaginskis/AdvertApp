using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities.Identity;

namespace API.Entities
{
    public enum AdvertCategory {Cars, Motorbikes, Parts, Services}
    public enum FuelType {Petrol, Diesel, Hybrid, Electric}
    public enum AdvertType {ForSale, Wanted}
    public class Advert
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Year { get; set; }
        public string Milage { get; set; }
        public string EngineSize { get; set; }
        public FuelType FuelType { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public ICollection<Photo> Photos { get; set; }
        public AppUser AppUser { get; set; }
        public int AppUserId { get; set; }
        public AdvertPricePackage AdvertPricePackage { get; set; }
        public int AdvertPricePackageId { get; set; }
        public AdvertCategory Category { get; set; }
    }
}