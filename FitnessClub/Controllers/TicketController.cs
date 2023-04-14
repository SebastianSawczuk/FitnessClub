using FitnessClub.Models;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using System.Net.Sockets;
using System.Reflection.PortableExecutable;
using System.Text.Json.Serialization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FitnessClub.Controllers
{
    [Controller]
    [Route("ticket")]
    public class TicketController : ControllerBase
    {
        private readonly ILogger<TicketController> _logger;

        public TicketController(ILogger<TicketController> logger)
        {
            _logger = logger;
        }
        MySqlConnection con = new MySqlConnection("server=127.0.0.1;user=root;database=FitnessClub");
        
        //GET: api/<TicketController>
        [HttpGet]
        public IEnumerable<Ticket> Get()
        {
            con.Open();
            MySqlCommand cmd = new MySqlCommand("select * from Ticket;", con);
            MySqlDataReader reader= cmd.ExecuteReader();

            List<Ticket> tickets = new List<Ticket>();

            while (reader.Read())
            {
                Ticket ticket = new Ticket();
                ticket.Id = reader.GetInt32(0);
                ticket.Name = reader.GetString(1);
                ticket.Peroid = reader.GetInt32(2);
                ticket.Price = (double)reader.GetDouble(3);
                tickets.Add(ticket);
            }

            return tickets.ToArray();     
        }

        // GET api/<TicketController>/5
        [HttpGet("{id}")]
        public IEnumerable<Ticket> Get(int id)
        {
                con.Open();
            MySqlCommand cmd = new MySqlCommand($"select * from Ticket where id_t = '{id}';", con);
            MySqlDataReader reader = cmd.ExecuteReader();

            List<Ticket> tickets = new List<Ticket>();

            while (reader.Read())
            {
                Ticket ticket = new Ticket();
                ticket.Id = reader.GetInt32(0);
                ticket.Name = reader.GetString(1);
                ticket.Peroid = reader.GetInt32(2);
                ticket.Price = (double)reader.GetDouble(3);
                tickets.Add(ticket);
            }

            return tickets.ToArray();
        }

        // POST api/<TicketController>
        [HttpPost]
        public void Post([FromBody] Ticket ticket)
        {
            con.Open();
            MySqlCommand cmd = new MySqlCommand($"insert into Ticket(name, peroid, price) values('{ticket.Name}', {ticket.Peroid}, {ticket.Price.ToString("F", CultureInfo.InvariantCulture)});", con);
            cmd.ExecuteNonQuery();
            con.Close();
        }

        // PUT api/<TicketController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Ticket ticket)
        {
            con.Open();
            MySqlCommand cmd = new MySqlCommand($"update Ticket set price = '{ticket.Price.ToString("F", CultureInfo.InvariantCulture)}' where id_t = {id}", con);
            cmd.ExecuteNonQuery();
            con.Close();
        }

        // DELETE api/<TicketController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            con.Open();
            MySqlCommand cmd = new MySqlCommand($"delete from ticket where id_t = {id};", con);
            cmd.ExecuteNonQuery();
            con.Close();
        }
    }
}
