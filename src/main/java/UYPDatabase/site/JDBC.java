package UYPDatabase.site;


import UYPDatabase.site.common.AllDto.CSVDto;
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

        while (rs.next()) {
            String s = rs.getString(1);
            System.out.println(s);
        }
        conn.close();


    }

    public void addStudent(GuestDto guest) throws ClassNotFoundException, SQLException {
        System.out.println("test");
        Connection conn = this.MakeConnection();
       // String query = "INSERT INTO `Student` (`firstname`,`middleinitial`,`lastname`,`suffix`,`nameprefered`,`address`,`city`,`state`,`zip`,`birthdate`,`gender`,`race`,`graduationyear`,`email`,`phonenumber`,`sibling`,`previousschool`,`grade`,`parent1firstname`,`parent1lastname`,`parent2firstname`,`parent2lastname`,`gtacceptance`,`password`, `expectedschool`) VALUES" +
        //        "('" + guest.getFirstName() + "','" + guest.getMiddleInitial() + "','" + guest.getLastName() + "','" + guest.getSuffix() + "','" + guest.getPreferredName() + "','" + guest.getAddressLine() + "','" + guest.getCity() + "','" + guest.getState() + "','" + guest.getZip() + "','" + guest.getBirthday() + "','" + guest.getGender() + "','" + guest.getEthnicity() + "','" + guest.getGraduationYear() + "','" + guest.getPrincipal() + "','" + guest.getPhoneNumber() + "','" + guest.getSibling() + "','" + guest.getPrevSchool() + "','12','" + guest.getParentFirstName() + "','" + guest.getParentLastName() + "','" + guest.getParentFirstName2() + "','" + guest.getParentLastName2() + "','" + guest.getGtAcceptance() + "','" + guest.getPassword() + "','" + guest.getExpectedSchool() + "');";
         String query = "INSERT INTO `Student` (`firstname`,`middleinitial`,`lastname`,`suffix`,`nameprefered`,`address`,`city`,`state`,`zip`,`birthdate`,`gender`,`race`,`graduationyear`,`email`,`phonenumber`,`sibling`,`previousschool`,`grade`,`parent1firstname`,`parent1lastname`,`parent2firstname`,`parent2lastname`,`gtacceptance`,`password`, `expectedschool`) VALUES" +
                "(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
        System.out.println(query);
        PreparedStatement p  = conn.prepareStatement(query);
        p.setString(1,guest.getFirstName());
        p.setString(2,guest.getMiddleInitial());
        p.setString(3,guest.getLastName());
        p.setString(4,guest.getSuffix());
        p.setString(5,guest.getPreferredName());
        p.setString(6,guest.getAddressLine());
        p.setString(7,guest.getCity());
        p.setString(8,guest.getState());
        p.setString(9,guest.getZip());
        p.setString(10,guest.getBirthday());
        p.setString(11,guest.getGender());
        p.setString(12,guest.getEthnicity());
        p.setString(13,guest.getGraduationYear());
        p.setString(14,guest.getPrincipal());
        p.setString(15,guest.getPhoneNumber());
        p.setString(16,guest.getSibling());
        p.setString(17,guest.getPrevSchool());
        p.setString(18,guest.getGrade());
        p.setString(19,guest.getParentFirstName());
        p.setString(20,guest.getParentLastName());
        p.setString(21,guest.getParentFirstName2());
        p.setString(22,guest.getParentLastName2());
        p.setString(23,guest.getGtAcceptance());
        p.setString(24,guest.getPassword());
        p.setString(25,guest.getExpectedSchool());

        System.out.println(p.toString());
        int rs = p.executeUpdate();
        String username = guest.getFirstName() + guest.getLastName() + (int) (Math.random() * 1000000);
        System.out.println(username);

         p = conn.prepareStatement("UPDATE Student SET username = ? WHERE email = ?");
         p.setString(1,username);
         p.setString(2,guest.getPrincipal());

        p.executeUpdate();

        if(!guest.getParentEmail().equals("")) {
            String q2 = "INSERT INTO `parent` (`firstname`,`lastname`,`email`,`homenumber`,`worknumber`,`cellnumber`) VALUES" +
                    "(?,?,?,?,?,?);";

            p = conn.prepareStatement(q2);

            p.setString(1, guest.getParentFirstName());
            p.setString(2, guest.getParentLastName());
            p.setString(3, guest.getParentEmail());
            p.setString(4, guest.getParentHomeNumber());
            p.setString(5, guest.getParentWorkNumber());
            p.setString(6, guest.getParentCellNumber());

            p.executeUpdate();
        }
        //System.out.println(q2);

        if(!guest.getParentEmail2().equals("")) {
            String q3 = "INSERT INTO `parent` (`firstname`,`lastname`,`email`,`homenumber`,`worknumber`,`cellnumber`) VALUES" +
                    "(?,?,?,?,?,?);";

            p = conn.prepareStatement(q3);

            p.setString(1, guest.getParentFirstName2());
            p.setString(2, guest.getParentLastName2());
            p.setString(3, guest.getParentEmail2());
            p.setString(4, guest.getParentHomeNumber2());
            p.setString(5, guest.getParentWorkNumber2());
            p.setString(6, guest.getParentCellNumber2());

            p.executeUpdate();
        }


        // System.out.println(q3);

        String q4 = "INSERT INTO `usertype` (`username`,`usertype`) VALUES" +
                " (?,'guest');";
        p = conn.prepareStatement(q4);
        p.setString(1,username);
        p.executeUpdate();
        System.out.println(q4);
        conn.close();
    }

    public UserDto getUserDetails(String username) throws ClassNotFoundException, SQLException {

        Connection conn = this.MakeConnection();

        PreparedStatement p = conn.prepareStatement("SELECT * FROM Student WHERE username = ?");
        p.setString(1,username);
        ResultSet rs = p.executeQuery();

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
         p = conn.prepareStatement("SELECT * FROM parent WHERE firstname = ? AND lastname = ?");
         p.setString(1,parentFirstName);
         p.setString(2,parentLastName);
         ResultSet rs2 = p.executeQuery();
        String parentEmail = "";
        String parentHomeNumber = "";
        String parentWorkNumber = "";
        String parentCellNumber = "";
        while(rs2.next()) {
            parentEmail = rs2.getString(3);
            parentHomeNumber = rs2.getString(4);
            parentWorkNumber = rs2.getString(5);
            parentCellNumber = rs2.getString(6);
        }

        p = conn.prepareStatement("SELECT * FROM parent WHERE firstname = ? AND lastname = ?");
        p.setString(1,parentFirstName2);
        p.setString(2,parentLastName2);
        ResultSet rs3 = p.executeQuery();
        String parentEmail2 = "";
        String parentHomeNumber2 = "";
        String parentWorkNumber2 = "";
        String parentCellNumber2 = "";
        while(rs3.next()) {
            parentEmail = rs3.getString(3);
            parentHomeNumber = rs3.getString(4);
            parentWorkNumber = rs3.getString(5);
            parentCellNumber = rs3.getString(6);
        }

        p =  conn.prepareStatement("SELECT * FROM usertype WHERE username = ?");
        p.setString(1,username);
        ResultSet rs4 = p.executeQuery();
        rs4.next();
        String usertype = rs4.getString(2);


        //guardian 1 info


        //guardian 2 info
        System.out.println("returning user details: firstName" + " " + lastName + " " + username);
        conn.close();
        return new UserDto(principal, username, firstName, middleInitial, lastName, addressLine, city, state, zip, phoneNumber, password, prevSchool, graduationYear, expectedSchool, sibling, gtAcceptance, suffix, preferredName, birthday, gender, ethnicity, grade, parentFirstName, parentLastName, parentEmail, parentHomeNumber, parentWorkNumber, parentCellNumber, parentFirstName2, parentLastName2, parentEmail2, parentHomeNumber2, parentWorkNumber2, parentCellNumber2, "", usertype);
    }

    public UserDto getUserExtraDetails(String username) throws ClassNotFoundException, SQLException {

        Connection conn = this.MakeConnection();

        PreparedStatement p = conn.prepareStatement("SELECT * FROM Student WHERE username = ?");
        p.setString(1,username);
        ResultSet rs = p.executeQuery();
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
        ResultSet rs2 = conn.prepareStatement("SELECT * FROM parent WHERE firstname = '" + parentFirstName + "' AND lastname = '" + parentLastName + "'").executeQuery();
        rs2.next();
        String parentEmail = rs2.getString(3);
        String parentHomeNumber = rs2.getString(4);
        String parentWorkNumber = rs2.getString(5);
        String parentCellNumber = rs2.getString(6);


        ResultSet rs3 = conn.prepareStatement("SELECT * FROM parent WHERE firstname = '" + parentFirstName2 + "' AND lastname = '" + parentLastName2 + "'").executeQuery();
        rs3.next();
        String parentEmail2 = rs3.getString(3);
        String parentHomeNumber2 = rs3.getString(4);
        String parentWorkNumber2 = rs3.getString(5);
        String parentCellNumber2 = rs3.getString(6);

        ResultSet rs4 = conn.prepareStatement("SELECT * FROM usertype WHERE username = '" + username + "'").executeQuery();
        rs4.next();
        String usertype = rs4.getString(2);


        ResultSet rs5 = conn.prepareStatement("SELECT * FROM studentinfo WHERE username = '" + username + "'").executeQuery();
        rs5.next();

        String yearaccepted = rs5.getString(1);
        String status = rs5.getString(2);
        String hasGrant = rs5.getString(3);
        String whichGrant = rs5.getString(4);
        String mentor = rs5.getString(5);
        String siblingid = rs5.getString(6);
        String disabilities = rs5.getString(7);
        String health = rs5.getString(8);
        String english = rs5.getString(9);
        String gt = rs5.getString(10);
        String cleaning = rs5.getString(11);
        String other = rs5.getString(12);
        String gradeAccepted = rs5.getString(13);
        String authorizedUser = rs5.getString(14);


        //guardian 1 info


        //guardian 2 info
        System.out.println("returning user details: firstName" + " " + lastName + " " + username);
        conn.close();

        return new UserDto(principal, firstName, middleInitial, lastName, addressLine, city, state, zip, phoneNumber, password, prevSchool, graduationYear, expectedSchool, sibling, gtAcceptance, suffix, preferredName, birthday, gender, ethnicity, grade, parentFirstName, parentLastName, parentEmail, parentHomeNumber, parentWorkNumber, parentCellNumber, parentFirstName2, parentLastName2, parentEmail2, parentHomeNumber2, parentWorkNumber2, parentCellNumber2, yearaccepted, gradeAccepted, status, hasGrant, whichGrant, mentor, disabilities, health, english, cleaning, other, usertype, username, authorizedUser);
    }

    public void updateuser(UserDto user) throws SQLException, ClassNotFoundException {
        Connection conn = this.MakeConnection();
        PreparedStatement p = conn.prepareStatement("UPDATE Student SET firstname = ?, middleinitial = ? , lastname = ?, suffix = ? ,nameprefered =? , address = ? , city = ? , state = ? , zip = ? , birthdate = ? , gender = ?, race = ?, graduationyear = ? , email =? , phonenumber = ? ,sibling = ? , previousschool = ? , grade = ? , parent1firstname =?, parent1lastname = ? , parent2firstname = ?, parent2lastname = ? , gtacceptance = ? ,expectedschool = ?  WHERE username = ?;");

        p.setString(1,user.getFirstName());
        p.setString(2,user.getMiddleInitial());
        p.setString(3,user.getLastName());
        p.setString(4,user.getSuffix());
        p.setString(5,user.getPreferredName());
        p.setString(6,user.getAddressLine());
        p.setString(7,user.getCity());
        p.setString(8,user.getState());
        p.setString(9,user.getZip());
        p.setString(10,user.getBirthday());
        p.setString(11,user.getGender());
        p.setString(12,user.getEthnicity());
        p.setString(13,user.getGraduationYear());
        p.setString(14,user.getPrincipal());
        p.setString(15,user.getPhoneNumber());
        p.setString(16,user.getSibling());
        p.setString(17,user.getPrevSchool());
        p.setString(18,user.getGrade());
        p.setString(19,user.getParentFirstName());
        p.setString(20,user.getParentLastName());
        p.setString(21,user.getParentFirstName2());
        p.setString(22,user.getParentLastName2());
        p.setString(23,user.getGtAcceptance());
        p.setString(24,user.getExpectedSchool());
        p.setString(25,user.getUsername());
        p.executeUpdate();
        conn.close();

    }

    public LoginDto login(String username, String password) throws SQLException, ClassNotFoundException {
        Connection conn = this.MakeConnection();
        PreparedStatement p = conn.prepareStatement("SELECT password, firstname,lastname FROM Student WHERE username = ?");
        p.setString(1,username);
        ResultSet rs = p.executeQuery();

        rs.next();
        String pass = rs.getString(1);
        String first = rs.getString(2);
        String last = rs.getString(3);
        System.out.println("");
        boolean loggedin = (pass.equals(password));
        if (loggedin) {
            p = conn.prepareStatement("SELECT usertype FROM usertype WHERE username = ?");
            p.setString(1,username);
            ResultSet rs2 = p.executeQuery();
            rs2.next();

            System.out.println(first + last + rs2.getString(1));

            String a = rs.getString(2);
            String b = rs.getString(3);
            String c = rs2.getString(1);
            conn.close();
            return new LoginDto(a, b, c, true);

        }
        conn.close();
        //return new LoginDto("", "", "", false);
        SQLException error = new SQLException();
        throw error;


    }

    public UserNameListDto getPossibleApplicants() throws SQLException, ClassNotFoundException {
        Connection conn = this.MakeConnection();
        ArrayList<String> temp = new ArrayList();
        String qury = "SELECT * FROM usertype";
        ResultSet rs = conn.prepareStatement(qury).executeQuery();
        while (rs.next()) {
            if (rs.getString(2).equals("guest")) {
                temp.add(rs.getString(1));
            }
        }
        System.out.println(temp.toString());
        conn.close();


        return new UserNameListDto(temp);

    }

    public void acceptApplicant(String username, String authorizeduser) throws SQLException, ClassNotFoundException, MailjetSocketTimeoutException, MailjetException {
        Connection conn = this.MakeConnection();
        String q = "UPDATE usertype SET usertype = 'user' WHERE username =? ";

        System.out.println(q);
        PreparedStatement p = conn.prepareStatement(q);
        p.setString(1,username);
        p.executeUpdate();

        String qury = "SELECT email FROM Student WHERE username =?";

        p = conn.prepareStatement(qury);
        p.setString(1, username);
        ResultSet rss = p.executeQuery();
        rss.next();
        String quey = "INSERT INTO `studentinfo` (`username`,`authorizeduser`) VALUES" +
                "(?, ?);";

        System.out.println(quey);
        p = conn.prepareStatement(quey);
        p.setString(1,username);
        p.executeUpdate();


        MailjetClient client;
        MailjetRequest request;
        MailjetResponse response;
        client = new MailjetClient("141f6e47ca4cc452b41aaa540312bc7a", "d8acde824e69d34ac0c55def4a1fbf12");
        request = new MailjetRequest(Email.resource)
                .property(Email.FROMEMAIL, "parakh_jaggi@baylor.edu")
                .property(Email.FROMNAME, "UYP Database Admin")
                .property(Email.SUBJECT, "You have been accepted!")
                .property(Email.TEXTPART, "Dear User,\n\tYou have been accepted! Welcome to UYP. \nYour new user name is " + username + " ")
                .property(Email.RECIPIENTS, new JSONArray()
                        .put(new JSONObject()
                                .put("Email", rss.getString(1))));


        response = client.post(request);

        conn.close();
    }

    public void updateApplicant(UserDto user) throws SQLException, ClassNotFoundException {
        String quey = "UPDATE studentinfo SET yearaccepted = ?,status =?, hasgrant = ? ,whichgrant = ? ,mentorname = ?,disabilities = ?,healthconditions = ?,learningenglish = ?,cleaninghouseinfo = ?,otherinfo = ?WHERE username = ?;";
        System.out.println(quey);

        Connection conn = this.MakeConnection();

        System.out.println(quey);
        PreparedStatement p  = conn.prepareStatement(quey);
        p.setString(1,user.getYearAccepted());
        p.setString(2,user.getStatus());
        p.setString(3,user.getHasGrant());
        p.setString(4,user.getWhichGrant());
        p.setString(5,user.getMentorName());
        p.setString(6,user.getDisability());
        p.setString(7,user.getHealthConditions());
        p.setString(8,user.getEnglish());
        p.setString(9,user.getCleaningHouseInfo());
        p.setString(10,user.getOtherInfo());
        p.setString(11,user.getUsername());

        p.executeUpdate();
        conn.close();

    }

    public ClassDto getNotMyClasses(String username) throws SQLException, ClassNotFoundException {
        Connection conn = this.MakeConnection();

        PreparedStatement p = conn.prepareStatement("SELECT grade FROM Student WHERE username = ? ");
        p.setString(1,username);
        ResultSet r = p.executeQuery();
        r.next();
        String g = r.getString(1);
        String qury = "SELECT * FROM class WHERE availability > 0 AND level = '"+g+"' AND id NOT IN (SELECT classid from studentclass WHERE username = ?    )  ORDER BY level ASC;";
        ArrayList<ClassDto> temp = new ArrayList<>();
        p = conn.prepareStatement(qury);
        p.setString(1,username);
        ResultSet rs = p.executeQuery();
        while (rs.next()) {
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

        //System.out.println("getting list of classes " + temp);
        conn.close();

        return new ClassDto(temp);
    }

    public ClassDto getMyClasses(String username) throws SQLException, ClassNotFoundException {
        Connection conn = this.MakeConnection();
        String qury = "SELECT * FROM class WHERE id IN (SELECT classid from studentclass WHERE username = ?  )  ORDER BY level ASC;";
        ArrayList<ClassDto> temp = new ArrayList<>();
        PreparedStatement p  = conn.prepareStatement(qury);
        p.setString(1,username);
        ResultSet rs = p.executeQuery();
        while (rs.next()) {
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
        conn.close();
        //System.out.println("getting list of classes " + temp);
        return new ClassDto(temp);
    }


    public void registerClass(String username, int classID) throws SQLException, ClassNotFoundException {
        Connection con = this.MakeConnection();
        System.out.println("trying to register " + username + " with id of " + classID);
        PreparedStatement p = con.prepareStatement("INSERT INTO `studentclass` (`username`,`ClassID`) VALUES" +
                "(?,?);");

        p.setString(1,username);
        p.setInt(2,classID);
        p.executeUpdate();

        ResultSet r = con.prepareStatement("SELECT availability FROM class WHERE id = '" + classID + "'").executeQuery();

        r.next();
        int a = r.getInt(1);
        System.out.println(a);
        a--;
        con.prepareStatement("UPDATE class SET availability = '" + a + "' WHERE id = '" + classID + "'").executeUpdate();

        con.close();
    }

    public void dropClass(String username, Integer classID) throws SQLException, ClassNotFoundException {
        Connection con = this.MakeConnection();
        PreparedStatement p = con.prepareStatement("DELETE FROM studentclass WHERE username = ? AND classid = ?");
        p.setString(1,username);
        p.setInt(2,classID);
        p.executeUpdate();

        p = con.prepareStatement("SELECT availability FROM class WHERE id =?");
        p.setInt(1,classID);
        ResultSet r = p.executeQuery();
        r.next();
        int a = r.getInt(1);
        System.out.println(a);
        a++;
        con.prepareStatement("UPDATE class SET availability = '" + a + "' WHERE id = '" + classID + "'").executeUpdate();

        con.close();
    }

    public UserNameListDto getUsers() throws SQLException, ClassNotFoundException {
        ArrayList<String> s = new ArrayList<>();
        Connection con = this.MakeConnection();
        ResultSet r = con.prepareStatement("SELECT username FROM studentinfo").executeQuery();
        while (r.next()) {
            s.add(r.getString(1));

        }
        System.out.println(s);
        con.close();
        return new UserNameListDto(s);

    }


    public void makeClass(ClassDto c) throws SQLException, ClassNotFoundException {
        Connection con = this.MakeConnection();
        PreparedStatement p = con.prepareStatement("INSERT INTO `class` (`level`,`name`,`timeslot`,`classroom`,`teachername`,`availability`,`capacity`) VALUES" +
                "(?,?,?,?,?,?,?);");

        p.setString(1,c.getLevel());
        p.setString(2,c.getName());
        p.setString(3,c.getTimeSlot());
        p.setString(4,c.getClassroom());
        p.setString(5,c.getTeacherName());
        p.setString(6,c.getAvailability());
        p.setString(7,c.getCapacity());
        p.executeUpdate();
        System.out.println(c.toString());
    }


    public ArrayList<ArrayList<String>> makeCSV(String username) throws SQLException, ClassNotFoundException{
        System.out.println("here");
        ArrayList<ArrayList<String>> temp = new ArrayList<>();
        ArrayList<String> a = new ArrayList<>();
        a.add("level");
        a.add("name");
        a.add("timeslot");
        a.add("classroom");
        a.add("teachername");
        a.add("availability");
        a.add("capacity");

        temp.add(a);

        Connection con = this.MakeConnection();
        String qury = "SELECT * FROM class WHERE id IN (SELECT classid from studentclass WHERE username = ?  )  ORDER BY level ASC;";
        PreparedStatement p  = con.prepareStatement(qury);
        p.setString(1,username);
        ResultSet r = p.executeQuery();
        while(r.next()){
            ArrayList<String> b = new ArrayList<>();
            b.add(r.getString(1));
            b.add(r.getString(2));
            b.add(r.getString(3));
            b.add(r.getString(4));
            b.add(r.getString(5));
            b.add(r.getString(7));
            b.add(r.getString(8));
            temp.add(b);
        }
        con.close();
        System.out.println(temp.toString());
        return temp;
    }

}





