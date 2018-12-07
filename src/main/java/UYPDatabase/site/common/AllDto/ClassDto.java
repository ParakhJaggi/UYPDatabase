package UYPDatabase.site.common.AllDto;

import java.util.ArrayList;

public class ClassDto {
    private String level;
    private String name;
    private String timeSlot;
    private String classroom;
    private String teacherName;
    private String id;



    private String availability;
    private String capacity;

    private ArrayList<ClassDto> classes = new ArrayList<>();

    public ClassDto(){

    }

    public ClassDto(ArrayList<ClassDto> temp){
        this.classes = temp;
    }

    public ArrayList<ClassDto> getClasses() {
        return classes;
    }

    public void setClasses(ArrayList<ClassDto> classes) {
        this.classes = classes;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public String getCapacity() {
        return capacity;
    }

    public void setCapacity(String capacity) {
        this.capacity = capacity;
    }


    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTimeSlot() {
        return timeSlot;
    }

    public void setTimeSlot(String timeSlot) {
        this.timeSlot = timeSlot;
    }

    public String getClassroom() {
        return classroom;
    }

    public void setClassroom(String classroom) {
        this.classroom = classroom;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }




}
