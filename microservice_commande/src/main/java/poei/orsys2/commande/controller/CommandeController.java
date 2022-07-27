package poei.orsys2.commande.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import poei.orsys2.commande.dao.CommandeDAO;
import poei.orsys2.commande.model.Commande;

@Controller
public class CommandeController {
    @Autowired
    CommandeDAO commandeDAO;

    @RequestMapping(value = "/commandes/list")
    public String consulterCommandes(Model model,
                                     @RequestParam(name = "page", defaultValue = "0") int page,
                                     @RequestParam(name = "size", defaultValue = "4") int size){
        Page<Commande> commandePages = commandeDAO.findAll(PageRequest.of(page, size));
        model.addAttribute("commandes", commandePages.getContent());
        int[] pages = new int[commandePages.getTotalPages()];
        model.addAttribute("pages", pages);
        model.addAttribute("pageCourante", page);
        return "commandes";
    }
}
