package danielklarenbach.burgerbarorderwebapp.Controllers;

import danielklarenbach.burgerbarorderwebapp.Models.ContactData;
import danielklarenbach.burgerbarorderwebapp.Repositories.ContactDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ContactDataController {
    @Autowired
    ContactDataRepository contactDataRepository;

    @RequestMapping("/contactdata")
    public ContactData getContactData(){
        return contactDataRepository.findById(1);
    }
}
