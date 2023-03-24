import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); //숫자로도 받을 수 있음 
		int N = Integer.parseInt(br.readLine());
		StringTokenizer st = new StringTokenizer(br.readLine());
		int first = Integer.parseInt(st.nextToken());
		int max = first;
		int min = first;
		
		for (int i=1; i<N; i++) {
			int num = Integer.parseInt(st.nextToken());
			if (max < num ) max = num;
			if (min > num ) min = num;
		}
		
		System.out.println(min + " " + max);
		
	}
}
