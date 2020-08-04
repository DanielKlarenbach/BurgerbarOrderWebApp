package danielklarenbach.burgerbarorderwebapp.Models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor
public class ContactData {
    @Id
    private int id;
    private String phoneNumber;
    private String email;
    private String address;
    private String description;
}
