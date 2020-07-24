package danielklarenbach.burgerbarorderwebapp.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.sql.Timestamp;

@Data
@Entity
@NoArgsConstructor
public class UserOrder {
    @Id
    @GeneratedValue
    private int id;
    @ManyToOne(optional=false)
    private User user;
    private Timestamp date;

    public UserOrder(User user, Timestamp date){
        this.user=user;
        this.date=date;
    }
}
