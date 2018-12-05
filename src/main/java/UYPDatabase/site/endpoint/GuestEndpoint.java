package UYPDatabase.site.endpoint;

import UYPDatabase.site.common.guest.GuestDto;
import UYPDatabase.site.common.guest.GuestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/guest")
public class GuestEndpoint {
    @Autowired
    private GuestService guestService;

    @PostMapping(value = "/apply")
    public void apply(@RequestBody GuestDto guestDto){
        guestService.apply(guestDto);
    }
}
