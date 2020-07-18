package danielklarenbach.burgerbarorderwebapp.Models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class User {
    @Id
    private int id;
    private String userName;
    private String password;
    private String roles;
}
