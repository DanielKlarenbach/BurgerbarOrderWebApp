package danielklarenbach.burgerbarorderwebapp.Security;

import danielklarenbach.burgerbarorderwebapp.Models.User;
import danielklarenbach.burgerbarorderwebapp.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AppUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        User user;
        try {
            user = repository.findByName(userName);
        } catch (UsernameNotFoundException exception){
            throw (new UsernameNotFoundException("User not found" + userName));
        }
        return new UserPrinciple(user);
    }
}
