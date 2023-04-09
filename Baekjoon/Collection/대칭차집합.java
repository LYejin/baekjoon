import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] s1 = br.readLine().split(" ");
		int count = 0;
		int N = Integer.parseInt(s1[0]);
		int M = Integer.parseInt(s1[1]);
		
		HashSet<Integer> Aset = new HashSet<>();
		HashSet<Integer> Bset = new HashSet<>();
		
		String[] s2 = br.readLine().split(" ");
		for(int i=0; i<N; i++) {
			Aset.add(Integer.parseInt(s2[i]));
		}
		String[] s3 = br.readLine().split(" ");
		for(int j=0; j<M; j++) {
			Bset.add(Integer.parseInt(s3[j]));
		}
		
		//A-B
		for (int z=0; z<M; z++) {
			if (!Aset.contains(Integer.parseInt(s3[z]))) { // 같은게 없으면 count
				count++;
			}
		}
		
		//B-A
		for (int y=0; y<N; y++) {
			if (!Bset.contains(Integer.parseInt(s2[y]))) {
				count++;
			}
		}
		
		System.out.println(count);
    }
}
