using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Dtos;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AdvertController : BaseApiController
    {
        private readonly DataContext _context;
        public AdvertController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Advert>>> GetAdverts()
        {
            return await _context.Adverts.ToListAsync();
        }
    }
}