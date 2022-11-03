package kr.co.reverse.archive.api.response;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
public class PapersRes {

    List<PaperRes> papers = new ArrayList<>();

}
