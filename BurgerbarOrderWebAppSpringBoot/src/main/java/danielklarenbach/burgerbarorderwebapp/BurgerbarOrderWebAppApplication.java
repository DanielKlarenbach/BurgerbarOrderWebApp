package danielklarenbach.burgerbarorderwebapp;

import danielklarenbach.burgerbarorderwebapp.Repositories.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class BurgerbarOrderWebAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(BurgerbarOrderWebAppApplication.class, args);
    }

}
