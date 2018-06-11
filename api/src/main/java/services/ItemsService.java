package services;

import domain.Item;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ItemsService {

	List getItems();
	Item setItem(Item item);
}
