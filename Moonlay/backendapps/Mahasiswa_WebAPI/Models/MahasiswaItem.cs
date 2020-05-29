using Org.BouncyCastle.Bcpg.OpenPgp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mahasiswa_WebAPI.Models
{
    public class MahasiswaItem
    {
        private MahasiswaContext context;
        public int id { get; set; }
        public string namaDepan { get; set; }
        public string namaBelakang { get; set; }
        public string prodi { get; set; }

    }
}
