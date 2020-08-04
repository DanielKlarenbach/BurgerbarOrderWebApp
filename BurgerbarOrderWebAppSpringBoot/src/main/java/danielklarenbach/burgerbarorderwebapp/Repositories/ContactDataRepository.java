package danielklarenbach.burgerbarorderwebapp.Repositories;

import danielklarenbach.burgerbarorderwebapp.Models.ContactData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContactDataRepository extends JpaRepository<ContactData, Integer> {
    ContactData findById(int id);
}
