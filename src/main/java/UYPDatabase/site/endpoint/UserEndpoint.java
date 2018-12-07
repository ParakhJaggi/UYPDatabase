package UYPDatabase.site.endpoint;

import UYPDatabase.site.common.AllDto.LoginDto;
import UYPDatabase.site.common.AllDto.UserNameListDto;
import UYPDatabase.site.common.user.UserDto;
import UYPDatabase.site.common.user.UserService;

import com.mailjet.client.errors.MailjetException;
import com.mailjet.client.errors.MailjetSocketTimeoutException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
@RequestMapping("/api/user")
public class UserEndpoint {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/login/{username}/{password}")
    public LoginDto login(@PathVariable("username") String username, @PathVariable("password") String password) throws SQLException, ClassNotFoundException {
        return userService.login(username,password);
    }

    @GetMapping(value = "/{username}")
    public UserDto getUserDetails(@PathVariable("username") String username) throws SQLException, ClassNotFoundException {
        return userService.getUserDetails(username);
    }

    @GetMapping(value = "/applicant/{username}")
    public UserDto getApplicantDetails(@PathVariable("username") String username) throws SQLException, ClassNotFoundException {
        return userService.getUserDetails(username);
    }

    @PostMapping(value = "/update-profile")
    public void updateUser(@RequestBody UserDto userDto) throws SQLException, ClassNotFoundException {
        userService.updateUser(userDto);
    }

    @GetMapping(value = "/possible-applicants")
    public UserNameListDto getPossibleApplicants() throws SQLException, ClassNotFoundException {
        return userService.getPossibleApplicants();
    }

    @PostMapping(value = "/accept/{username}/{authorizedPerson}")
    public void acceptApplicant(@PathVariable("username") String username, @PathVariable("authorizedPerson") String authorizedPerson) throws SQLException, ClassNotFoundException, MailjetSocketTimeoutException, MailjetException {
        userService.acceptApplicant(username, authorizedPerson);
    }

    @PostMapping(value = "/applicant-submit-info/")
    public void updateApplicant(@RequestBody UserDto userDto) throws SQLException, ClassNotFoundException {
        userService.updateApplicant(userDto);
    }

}
