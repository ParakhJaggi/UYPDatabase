package UYPDatabase.site;


import UYPDatabase.site.common.AllDto.ClassDto;
import UYPDatabase.site.common.AllDto.LoginDto;
import UYPDatabase.site.common.AllDto.UserNameListDto;
import UYPDatabase.site.common.guest.GuestDto;
import UYPDatabase.site.common.user.UserDto;
import com.mailjet.client.MailjetClient;
import com.mailjet.client.MailjetRequest;
import com.mailjet.client.MailjetResponse;
import com.mailjet.client.errors.MailjetException;
import com.mailjet.client.errors.MailjetSocketTimeoutException;
import com.mailjet.client.resource.Email;
import org.json.JSONArray;
import org.json.JSONObject;

import java.sql.*;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class JDBC {

    public Connection MakeConnection() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.jdbc.Driver");
        String connectionUrl = "jdbc:mysql://localhost:3306/uypd?useUnicode=true&characterEncoding=UTF-8&user=root&password=test1234";
        return DriverManager.getConnection(connectionUrl);

    }

    public void DerbyTest() throws Exception {

        Connection conn = this.MakeConnection();
        ResultSet rs = conn.prepareStatement("show tables").executeQuery();

        while(rs.next()){
            String s = rs.getString(1);
            System.out.println(s);
        }


    }
    public void addStudent(GuestDto guest) throws ClassNotFoundException, SQLException {
        System.out.println("test");
        Connection conn =this.MakeConnection();
        String query = "INSERT INTO `Student` (`firstname`,`middleinitial`,`lastname`,`suffix`,`nameprefered`,`address`,`city`,`state`,`zip`,`birthdate`,`gender`,`race`,`graduationyear`,`email`,`phonenumber`,`sibling`,`previousschool`,`grade`,`parent1firstname`,`parent1lastname`,`parent2firstname`,`parent2lastname`,`gtacceptance`,`password`, `expectedschool`) VALUES" +
                "('"+guest.getFirstName()+"','"+guest.getMiddleInitial()+"','"+guest.getLastName()+"','"+guest.getSuffix()+"','"+guest.getPreferredName()+"','"+guest.getAddressLine()+"','"+guest.getCity()+"','"+guest.getState()+"','"+guest.getZip()+"','"+guest.getBirthday()+"','"+guest.getGender()+"','"+guest.getEthnicity()+"','"+guest.getGraduationYear()+"','"+guest.getPrincipal()+"','"+guest.getPhoneNumber()+"','"+guest.getSibling()+"','"+guest.getPrevSchool()+"','12','"+guest.getParentFirstName()+"','"+guest.getParentLastName()+"','"+guest.getParentFirstName2()+"','"+guest.getParentLastName2()+"','"+guest.getGtAcceptance()+"','"+guest.getPassword()+"','"+guest.getExpectedSchool()+"');";
        System.out.println(query);
        int rs = conn.prepareStatement(query).executeUpdate();



        String username = guest.getFirstName()+guest.getLastName() + (int)(Math.random() * 1000000);
        System.out.println(username);

         rs = conn.prepareStatement("UPDATE Student SET username = '"+username+"' WHERE email = '"+guest.getPrincipal()+"'").executeUpdate();




        String q2 = "INSERT INTO `parent` (`firstname`,`lastname`,`email`,`homenumber`,`worknumber`,`cellnumber`) VALUES" +
                "('"+guest.getParentFirstName()+"','"+guest.getParentLastName()+"','"+guest.getParentEmail()+"','"+guest.getParentHomeNumber()+"','"+guest.getParentWorkNumber()+"','"+guest.getParentCellNumber()+"');";
        //System.out.println(q2);

        rs = conn.prepareStatement(q2).executeUpdate();

        String q3 = "INSERT INTO `parent` (`firstname`,`lastname`,`email`,`homenumber`,`worknumber`,`cellnumber`) VALUES" +
                "('"+guest.getParentFirstName2()+"','"+guest.getParentLastName2()+"','"+guest.getParentEmail2()+"','"+guest.getParentHomeNumber2()+"','"+guest.getParentWorkNumber2()+"','"+guest.getParentCellNumber2()+"');";
        rs = conn.prepareStatement(q3).executeUpdate();
       // System.out.println(q3);

        String q4 = "INSERT INTO `usertype` (`username`,`usertype`) VALUES" +
                " ('"+username+"','guest');";
        rs = conn.prepareStatement(q4).executeUpdate();


    }

    public UserDto getUserDetails(String username) throws ClassNotFoundException, SQLException {

        Connection conn =this.MakeConnection();

        ResultSet rs = conn.prepareStatement("SELECT * FROM Student WHERE username = '"+username+"'").executeQuery();
        rs.next();

         String firstName = rs.getString(1);
         String middleInitial = rs.getString(2);
         String lastName = rs.getString(3);
        String suffix = rs.getString(4);
        String preferredName = rs.getString(5);

        String addressLine = rs.getString(6);
         String city = rs.getString(7);
         String state = rs.getString(8);
         String zip = rs.getString(9);
        String birthday = rs.getString(10);
        String gender = rs.getString(11);
        String ethnicity = rs.getString(12);
        String graduationYear = rs.getString(13);
        String principal = rs.getString(14);

        String phoneNumber = rs.getString(15);
        String sibling = rs.getString(16);
        String prevSchool = rs.getString(17);
        String grade = rs.getString(18);

        String parentFirstName = rs.getString(19);
        String parentLastName = rs.getString(20);
        String parentFirstName2 = rs.getString(21);
        String parentLastName2 = rs.getString(22);
        String gtAcceptance = rs.getString(23);
        String password = rs.getString(24);
        username = rs.getString(25);
        String expectedSchool = rs.getString(26);


        System.out.println("parent name is " + parentFirstName + " " + parentLastName);
        ResultSet rs2 = conn.prepareStatement("SELECT * FROM parent WHERE firstname = '"+parentFirstName+"' AND lastname = '"+parentLastName+"'").executeQuery();
        rs2.next();
        String parentEmail = rs2.getString(3);
        String parentHomeNumber = rs2.getString(4);
        String parentWorkNumber = rs2.getString(5);
        String parentCellNumber = rs2.getString(6);


        ResultSet rs3 = conn.prepareStatement("SELECT * FROM parent WHERE firstname = '"+parentFirstName2+"' AND lastname = '"+parentLastName2+"'").executeQuery();
        rs3.next();
        String parentEmail2 = rs3.getString(3);
        String parentHomeNumber2 = rs3.getString(4);
        String parentWorkNumber2 = rs3.getString(5);
        String parentCellNumber2 = rs3.getString(6);

        ResultSet rs4 = conn.prepareStatement("SELECT * FROM usertype WHERE username = '"+username+"'").executeQuery();
        rs4.next();
        String usertype = rs4.getString(2);


        //guardian 1 info


        //guardian 2 info
        System.out.println("returning user details: firstName" + " " + lastName + " " + username);
        return new UserDto(principal,username,firstName,middleInitial,lastName,addressLine,city,state,zip,phoneNumber,password,prevSchool,graduationYear,expectedSchool,sibling,gtAcceptance,suffix,preferredName,birthday,gender,ethnicity,grade,parentFirstName,parentLastName,parentEmail,parentHomeNumber,parentWorkNumber,parentCellNumber,parentFirstName2,parentLastName2,parentEmail2,parentHomeNumber2,parentWorkNumber2,parentCellNumber2,"idk",usertype);
    }

    public void updateuser(UserDto user) throws SQLException, ClassNotFoundException {
        Connection conn =this.MakeConnection();
        int rs = conn.prepareStatement("UPDATE Student SET firstname = '"+user.getFirstName()+"', middleinitial = '"+user.getMiddleInitial()+"' , lastname = '"+user.getLastName()+"', suffix = '"+user.getSuffix()+"' ,nameprefered = '"+user.getPreferredName()+"' , address = '"+user.getAddressLine()+"' , city = '"+user.getCity()+"' , state = '"+user.getState()+"' , zip = '"+user.getZip()+"' , birthdate = '"+user.getBirthday()+"' , gender = '"+user.getGender()+"', race = '"+user.getEthnicity()+"', graduationyear = '"+user.getGraduationYear()+"' , email = '"+user.getPrincipal()+"' , phonenumber = '"+user.getPhoneNumber()+"' ,sibling = '"+user.getSibling()+"' , previousschool = '"+user.getPrevSchool()+"' , grade = '"+user.getGrade()+"' , parent1firstname = '+"+user.getParentFirstName()+"', parent1lastname = '"+user.getParentLastName()+"' , parent2firstname = '"+user.getParentFirstName2()+"', parent2lastname = '"+user.getParentLastName2()+ "' , gtacceptance = '"+user.getGtAcceptance()+"' ,expectedschool = '"+user.getExpectedSchool()+"'  WHERE username = '"+user.getUsername()+"';").executeUpdate();

    }

    public LoginDto login(String username, String password) throws SQLException, ClassNotFoundException {
        Connection conn =this.MakeConnection();
        ResultSet rs = conn.prepareStatement("SELECT password, firstname,lastname FROM Student WHERE username = '"+username+"'").executeQuery();
        System.out.println("SELECT password, firstname,lastname FROM Student WHERE username = '"+username+"'");

        rs.next();
        String pass = rs.getString(1);
        String first = rs.getString(2);
        String last = rs.getString(3);
        boolean loggedin = (pass.equals(password));
       if(loggedin){
            ResultSet rs2 = conn.prepareStatement("SELECT usertype FROM usertype WHERE username = '"+username+"'").executeQuery();
            rs2.next();

            System.out.println(first+last+rs2.getString(1));
            return new LoginDto(rs.getString(2),rs.getString(3),rs2.getString(1),true);

        }
       return new LoginDto("","","",false);



    }

    public UserNameListDto getPossibleApplicants() throws SQLException, ClassNotFoundException {
        Connection conn =this.MakeConnection();
        ArrayList<String> temp = new ArrayList();
        String qury = "SELECT * FROM usertype";
        ResultSet rs = conn.prepareStatement(qury).executeQuery();
        while(rs.next()){
            if(rs.getString(2).equals("guest")){
                temp.add(rs.getString(1));
            }
        }
        System.out.println(temp.toString());

        return new UserNameListDto(temp);

    }

    public void acceptApplicant(String username, String authorizeduser) throws SQLException, ClassNotFoundException, MailjetSocketTimeoutException, MailjetException {
        Connection conn =this.MakeConnection();
        String q = "UPDATE usertype SET usertype = 'user' WHERE username = '"+username+"' ";
        System.out.println(q);
        int rs = conn.prepareStatement(q).executeUpdate();

        String qury = "SELECT email FROM Student WHERE username = '"+username+"'";

        ResultSet rss = conn.prepareStatement(qury).executeQuery();
        rss.next();
        String quey = "INSERT INTO `studentinfo` (`username`,`authorizeduser`) VALUES" +
                "('"+ username+"', '"+authorizeduser+"');";
        System.out.println(quey);
        int rs2 = conn.prepareStatement(quey).executeUpdate();


        MailjetClient client;
        MailjetRequest request;
        MailjetResponse response;
        client = new MailjetClient("141f6e47ca4cc452b41aaa540312bc7a", "d8acde824e69d34ac0c55def4a1fbf12");
        request = new MailjetRequest(Email.resource)
                .property(Email.FROMEMAIL, "parakh_jaggi@baylor.edu")
                .property(Email.FROMNAME, "UYP Database Admin")
                .property(Email.SUBJECT, "You have been accepted!")
                .property(Email.TEXTPART, "Dear User,\n\tYou have been accepted! Welcome to UYP. \nYour new user name is "+username+" ")
                .property(Email.RECIPIENTS, new JSONArray()
                        .put(new JSONObject()
                                .put("Email",rss.getString(1))));


        response = client.post(request);





    }

    public void updateApplicant(UserDto user) throws SQLException, ClassNotFoundException {
        Date date = new Date();
        String quey = "UPDATE studentinfo SET yearaccepted = '"+user.getYearAccepted()+"',status = '"+user.getStatus()+"',hasgrant = '"+user.getHasGrant()+"',whichgrant = '"+user.getWhichGrant()+"',mentorname = '"+user.getMentorName()+"',disabilities = '"+user.getDisability()+"',healthconditions = '"+user.getHealthConditions()+"',learningenglish = '"+user.getEnglish()+"',cleaninghouseinfo = '"+user.getCleaningHouseInfo()+"',otherinfo = '"+user.getOtherInfo()+"'WHERE username = '"+user.getUsername()+"';";
        System.out.println(quey);
        Connection conn =this.MakeConnection();
        System.out.println(quey);
        int rs = conn.prepareStatement(quey).executeUpdate();






    }

    public ClassDto getNotMyClasses(String username) throws SQLException, ClassNotFoundException {
        Connection conn =this.MakeConnection();
        String qury = "SELECT * FROM class WHERE availability > 0 AND id NOT IN (SELECT classid from studentclass WHERE username = '"+username+"'  )  ORDER BY level ASC;";
        ArrayList<ClassDto> temp = new ArrayList<>();
        ResultSet rs = conn.prepareStatement(qury).executeQuery();
        while(rs.next()){
            ClassDto c = new ClassDto();
            c.setLevel(rs.getString(1));
            c.setName(rs.getString(2));
            c.setTimeSlot(rs.getString(3));
            c.setClassroom(rs.getString(4));
            c.setTeacherName(rs.getString(5));
            c.setId(rs.getString(6));
            c.setAvailability(rs.getString(7));
            c.setCapacity(rs.getString(8));
            temp.add(c);
            }

        System.out.println("getting list of classes " + temp);
        return new ClassDto(temp);
        }

    public ClassDto getMyClasses(String username) throws SQLException, ClassNotFoundException {
        Connection conn =this.MakeConnection();
        String qury = "SELECT * FROM class WHERE id IN (SELECT classid from studentclass WHERE username = '"+username+"'  )  ORDER BY level ASC;";
        ArrayList<ClassDto> temp = new ArrayList<>();
        ResultSet rs = conn.prepareStatement(qury).executeQuery();
        while(rs.next()){
            ClassDto c = new ClassDto();
            c.setLevel(rs.getString(1));
            c.setName(rs.getString(2));
            c.setTimeSlot(rs.getString(3));
            c.setClassroom(rs.getString(4));
            c.setTeacherName(rs.getString(5));
            c.setId(rs.getString(6));
            c.setAvailability(rs.getString(7));
            c.setCapacity(rs.getString(8));
            temp.add(c);
        }

        System.out.println("getting list of classes " + temp);
        return new ClassDto(temp);
    }



    public void registerClass(String username, int classID) throws SQLException, ClassNotFoundException {
        Connection con = this.MakeConnection();
        System.out.println("trying to register " + username + " with id of " + classID);
        con.prepareStatement("INSERT INTO `studentclass` (`username`,`ClassID`) VALUES" +
                "('" + username + "','" + classID + "');").executeUpdate();

        ResultSet r = con.prepareStatement("SELECT availability FROM class WHERE id = '"+classID+"'").executeQuery();

        r.next();
        int a = r.getInt(1);
        System.out.println(a);
        a--;
        con.prepareStatement("UPDATE class SET availability = '"+a+"' WHERE id = '"+classID+"'").executeUpdate();

    }

    public void dropClass(String username, Integer classID) throws SQLException, ClassNotFoundException {
        Connection con = this.MakeConnection();
        con.prepareStatement("DELETE FROM studentclass WHERE username = '"+username+"' AND classid = '"+classID+"'").executeUpdate();

    }

    public UserNameListDto getUsers() throws SQLException, ClassNotFoundException {
        ArrayList<String> s = new ArrayList<>();
        Connection con = this.MakeConnection();
        ResultSet r  = con.prepareStatement("SELECT username FROM studentinfo"  ).executeQuery();
        while(r.next()){
            s.add(r.getString(1));

        }
        System.out.println(s);
        return new UserNameListDto(s);

    }
}





