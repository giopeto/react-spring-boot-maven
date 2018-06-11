package services;

import cache.ItemsCache;
import domain.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemsServiceImpl implements ItemsService {

	private final ItemsCache itemsCache;

	@Autowired
	public ItemsServiceImpl(ItemsCache itemsCache) {
		this.itemsCache = itemsCache;
	}

	@Override
	public List getItems() {
		return itemsCache.getItems();
	}

	@Override
	public Item setItem(Item item) {
		itemsCache.setItems(item);
		return item;
	}
}
