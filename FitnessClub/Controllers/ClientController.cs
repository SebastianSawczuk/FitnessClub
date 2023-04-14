using FitnessClub.Models;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using System.Globalization;
using System.Net.Sockets;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FitnessClub.Controllers
{
    [Route("client")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly ILogger<ClientController> _logger;

        public ClientController(ILogger<ClientController> logger)
        {
            _logger = logger;
        }
        MySqlConnection con = new MySqlConnection("server=127.0.0.1;user=root;database=FitnessClub");

        // GET: api/<ClientController>
        [HttpGet]
        public IEnumerable<Client> Get()
        {
            con.Open();
            MySqlCommand cmd = new MySqlCommand("select * from client;", con);
            MySqlDataReader reader = cmd.ExecuteReader();

            List<Client> clients = new List<Client>();

            while (reader.Read())
            {
                Client client = new Client();
                client.Id = reader.GetInt32(0);
                client.FirstName = reader.GetString(1);
                client.LastName = reader.GetString(2);
                client.Email= reader.GetString(3);
                clients.Add(client);
            }

            return clients.ToArray();
        }

        // GET api/<ClientController>/5
        [HttpGet("{id}")]
        public IEnumerable<Client> Get(int id)
        {
            con.Open();
            MySqlCommand cmd = new MySqlCommand($"select * from client where id_c = '{id}';", con);
            MySqlDataReader reader = cmd.ExecuteReader();

            List<Client> clients = new List<Client>();

            while (reader.Read())
            {
                Client client = new Client();
                client.Id = reader.GetInt32(0);
                client.FirstName = reader.GetString(1);
                client.LastName = reader.GetString(2);
                client.Email = reader.GetString(3);
                clients.Add(client);
            }

            return clients.ToArray();
        }

        [HttpGet("{id}/{fname}/{lname}")]
        public int Get(int id, string fname, string lname)
        {
            con.Open();
            MySqlCommand cmd = new MySqlCommand($"select * from client where first_name = '{fname}' and last_name = '{lname}';", con);
            MySqlDataReader reader = cmd.ExecuteReader();

            //List<Client> clients = new List<Client>();
            Client client = new Client();
            while (reader.Read())
            {
                
                client.Id = reader.GetInt32(0);
                client.FirstName = reader.GetString(1);
                client.LastName = reader.GetString(2);
                client.Email = reader.GetString(3);
                //clients.Add(client);
            }

            return client.Id;
        }

        // POST api/<ClientController>
        [HttpPost]
        public void Post([FromBody] Client client)
        {
            con.Open();
            MySqlCommand cmd = new MySqlCommand($"insert into Client(first_name, last_name, email) values('{client.FirstName}', '{client.LastName}', '{client.Email}');", con);
            cmd.ExecuteNonQuery();
            con.Close();
        }

        // PUT api/<ClientController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Client client)
        {
            con.Open();
            MySqlCommand cmd = new MySqlCommand($"update Client set first_name = '{client.FirstName}', last_name = '{client.LastName}', email = '{client.Email}' where id_c = {id}", con);
            cmd.ExecuteNonQuery();
            con.Close();
        }

        // DELETE api/<ClientController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            con.Open();
            MySqlCommand cmd = new MySqlCommand($"delete from client where id_c = {id};", con);
            cmd.ExecuteNonQuery();
            con.Close();
        }
    }
}
