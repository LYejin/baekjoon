import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] s1 = br.readLine().split(" ");
		int count = 0;
		int N = Integer.parseInt(s1[0]);
		int M = Integer.parseInt(s1[1]);
		
		ArrayList<String> al = new ArrayList<>();
		
		for (int i=0; i<N; i++) {
			al.add(br.readLine());
		}
		
		for (int j=0; j<M; j++) {
			if (al.contains(br.readLine())) {
				count++;
			}
		}
		System.out.println(count);
    }
}
