import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		//값 입력하기
		int N = Integer.parseInt(br.readLine());
		List<String> carList = new ArrayList<>();
		for (int i=0; i<N; i++) {
			carList.add(br.readLine());
		}
		List<String> badCarList = new ArrayList<>();
		for (int j=0; j<N; j++) {
			badCarList.add(br.readLine());
		}
		int badCount = 0;
		
		for (int z=0; z<carList.size(); z++) {
			if (!carList.get(z).equals(badCarList.get(z))) {
				carList.remove(badCarList.get(z));
				badCarList.remove(z);
				badCount++;
				z--;
			}
		}
		
		System.out.println(badCount);
	}
}
