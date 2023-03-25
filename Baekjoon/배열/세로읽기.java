import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); //숫자로도 받을 수 있음 
		StringBuilder sb = new StringBuilder();
		// 각 줄을 배열로 받는다. 각 줄을 add 시켜서 배열에 넣는데 만약 없으면 그냥 통과한다
		
		char[][] chs = new char[5][15];
		
		for (int i=0; i<5; i++) {
			String str = br.readLine();
			for (int j=0; j< str.length(); j++) {
				chs[i][j] = str.charAt(j);
			}
		}
		
		for (int j=0; j<15; j++) {
			for (int k=0; k<5; k++) {
				if (chs[k][j] != '\0') { // if(arr[j][i] != ' ') 하면 틀린다 
					sb.append(chs[k][j]);
				}
			}
		}
		
		System.out.println(sb);
		
	}
}