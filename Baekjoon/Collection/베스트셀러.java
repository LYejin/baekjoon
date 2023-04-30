import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int N = Integer.parseInt(br.readLine());
		int maxBookCount = 1; // 1로 시작하기
		
		HashMap<String, Integer> bookList = new HashMap<>();
		
		//많이 적힌 책 이름 세기 
		for (int i=0; i<N; i++) {
			String bookName = br.readLine();
			
			if(!bookList.containsKey(bookName)) {
				bookList.put(bookName, 1);
				continue;
			} 
			bookList.put(bookName, bookList.get(bookName)+1);
			
			if(bookList.get(bookName) > maxBookCount ) {
				maxBookCount = bookList.get(bookName);
			}
		}
		// 동일한 책 개수 구하기 
		List<String> al = new ArrayList<>();
		for(Map.Entry<String, Integer> m : bookList.entrySet()) { // 타입을 꼭 명시해줄 것
			if (m.getValue() == maxBookCount) {
				al.add(m.getKey());
			}
		}
		Collections.sort(al);
		System.out.println(al.get(0));
	}
}
