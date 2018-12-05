package UYPDatabase.site.common.guest;

import java.util.List;

import UYPDatabase.site.common.guest.GuestDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class GuestService {
    @Autowired
    private GuestDao guestDao;

    public void apply(GuestDto guestDto){
        guestDao.apply(guestDto);
    }

}

