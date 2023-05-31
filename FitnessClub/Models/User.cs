namespace FitnessClub.Models
{
    public class User
    {
        public User()
        {
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string E_mail { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }

        public User(int id, string name, string lastName, string e_mail, string login, string password)
        {
            Id = id;
            Name = name;
            LastName = lastName;
            E_mail = e_mail;
            Login = login;
            Password = password;
        }
    }
}
