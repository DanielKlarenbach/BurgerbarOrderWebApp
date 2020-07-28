package danielklarenbach.burgerbarorderwebapp.Models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor
public class Dish {
    @Id
    @GeneratedValue
    private int id;
    private int price;
    private String name;
    private String category;
    private String description;
}
