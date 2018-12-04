package UYPDatabase.site.endpoint;

import UYPDatabase.site.common.user.UserDto;
import UYPDatabase.site.common.user.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserEndpoint {

    @Autowired
    private UserService userService;

    @PostMapping(value = "/apply")
    public void apply(@RequestBody UserDto userDto){
        //userService.apply(userDto);
    }
}
