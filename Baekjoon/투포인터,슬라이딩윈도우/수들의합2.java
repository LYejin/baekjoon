import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] s1 = br.readLine().split(" ");
		
		int n = Integer.parseInt(s1[0]);
		int m = Integer.parseInt(s1[1]);

		String[] s2 = br.readLine().split(" ");
		
		int count = 0;
		int sum = 0;
		int startIndex = 0;
		int endIndex = 0;
		
		
		while (true) {
			if (sum >= m) {
				sum += Integer.parseInt(s2[startIndex++]); --> 오류생김 string이라서 그런듯
			} else if (endIndex >= n-1) {
				break;
			} else {
				sum += Integer.parseInt(s2[endIndex++]);
			}
			
			if (sum == m) {
				count++;
			}
		}
		System.out.println(count);

    }
}