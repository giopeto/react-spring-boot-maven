package cache;

import domain.Item;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ItemsCache {

	private List<Item> items = new ArrayList<>();

	public List<Item> getItems() {
		return items;
	}

	public List<Item> setItems(Item item) {
		items.add(item);
		return items;
	}
}
