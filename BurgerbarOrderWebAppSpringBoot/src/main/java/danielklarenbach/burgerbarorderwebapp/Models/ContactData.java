package danielklarenbach.burgerbarorderwebapp.Models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
public class ContactData {
    @Id
    private int id;
    private String phoneNumber;
    private String email;
    private String address;
    @Lob
    @Column(length = 1000000)
    private String description;
}
