package danielklarenbach.burgerbarorderwebapp.Models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Dish {
    @Id
    private int id;
    private int price;
    private String name;
    private String category;
    private String description;
}
