package UYPDatabase.site.common.AllDto;

import java.util.ArrayList;

public class CSVDto {
    public CSVDto(ArrayList<ArrayList<String>> a ){
        this.csv = a;
    }
    public ArrayList<ArrayList<String>> getCsv() {
        return csv;
    }

    public void setCsv(ArrayList<ArrayList<String>> csv) {
        this.csv = csv;
    }

    private ArrayList<ArrayList<String>> csv = new ArrayList<>();

}
