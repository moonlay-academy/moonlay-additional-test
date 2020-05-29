using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace Mahasiswa_WebAPI.Models
{
    public class MahasiswaContext
    {
        public string ConnectionString { get; set; }
        public MahasiswaContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }
        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }
        public List<MahasiswaItem> GetAllMahasiswa()
        {
            List<MahasiswaItem> list = new List<MahasiswaItem>();

            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM mahasiswa", conn);
                using (MySqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new MahasiswaItem()
                        {
                            id = reader.GetInt32("id"),
                            namaDepan = reader.GetString("namaDepan"),
                            namaBelakang = reader.GetString("namaBelakang"),
                            prodi = reader.GetString("prodi")
                        });
                    }
                }
            }
            return list;
        }
        public List<MahasiswaItem> GetSiswa(string id)
        {
            List<MahasiswaItem> list = new List<MahasiswaItem>();

            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM mahasiswa WHERE id = @id", conn);
                cmd.Parameters.AddWithValue("@id", id);

                using (MySqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new MahasiswaItem()
                        {
                            id = reader.GetInt32("id"),
                            namaDepan = reader.GetString("namaDepan"),
                            namaBelakang = reader.GetString("namaBelakang"),
                            prodi = reader.GetString("prodi")
                        });
                    }
                }
            }
            return list;
        }
    }
}
