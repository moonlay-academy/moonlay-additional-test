using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mahasiswa_WebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mahasiswa_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MahasiswaController : ControllerBase
    {
        private MahasiswaContext _context;

        public MahasiswaController(MahasiswaContext context)
        {
            this._context = context;
        }

        //GET : api/User
        [HttpGet]
        public ActionResult<IEnumerable<MahasiswaItem>> GetMahasiswaItems()
        {
            _context = HttpContext.RequestServices.GetService(typeof(MahasiswaContext)) as MahasiswaContext;
            //return new string[] { "value1", "value2" };
            return _context.GetAllMahasiswa();
        }
        //GET : api/user/{id}
        [HttpGet("{id}", Name = "Get")]
        public ActionResult<IEnumerable<MahasiswaItem>> GetMahasiswaItem(String id)
        {
            _context = HttpContext.RequestServices.GetService(typeof(MahasiswaContext)) as MahasiswaContext;
            return _context.GetSiswa(id);
        }
    }
}
