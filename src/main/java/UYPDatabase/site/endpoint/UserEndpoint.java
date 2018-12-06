package UYPDatabase.site.endpoint;

import UYPDatabase.site.common.AllDto.LoginDto;
import UYPDatabase.site.common.AllDto.UserNameListDto;
import UYPDatabase.site.common.user.UserDto;
import UYPDatabase.site.common.user.UserService;

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
    public LoginDto login(@PathVariable("username") String username, @PathVariable("password") String password){
        return userService.login(username,password);
    }

    @GetMapping(value = "/{username}")
    public UserDto getUserDetails(@PathVariable("username") String username) throws SQLException, ClassNotFoundException {
        return userService.getUserDetails(username);
    }

    @PostMapping(value = "/update-profile")
    public void updateUser(@RequestBody UserDto userDto){
        userService.updateUser(userDto);
    }

    @GetMapping(value = "/possible-applicants")
    public UserNameListDto getPossibleApplicants(){
        return userService.getPossibleApplicants();
    }

    @PostMapping(value = "/accept")
    public void acceptApplicant(@RequestBody String username){
        userService.acceptApplicant(username);
    }


}
