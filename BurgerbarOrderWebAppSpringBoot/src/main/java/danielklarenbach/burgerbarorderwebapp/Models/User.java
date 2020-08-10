package danielklarenbach.burgerbarorderwebapp.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Data
@Entity
@NoArgsConstructor
@Table(name="users")
public class User {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String password;
    private String roles;

    public User(String name, String password, String roles){
        this.name=name;
        this.password=password;
        this.roles=roles;
    }
}
