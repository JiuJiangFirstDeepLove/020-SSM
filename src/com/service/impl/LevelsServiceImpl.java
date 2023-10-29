package com.service.impl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.dao.LevelsDAO;
import com.entity.Levels;
import com.service.LevelsService;

@Service("levelsService")
public class LevelsServiceImpl implements LevelsService {
	@Autowired
	private LevelsDAO levelsDAO;
	@Override // 继承接口的新增 返回值0(失败),1(成功)
	public int insertLevels(Levels levels) {
		return this.levelsDAO.insertLevels(levels);
	}

	@Override // 继承接口的更新 返回值0(失败),1(成功)
	public int updateLevels(Levels levels) {
		return this.levelsDAO.updateLevels(levels);
	}

	@Override // 继承接口的删除 返回值0(失败),1(成功)
	public int deleteLevels(String levelsid) {
		return this.levelsDAO.deleteLevels(levelsid);
	}

	@Override // 继承接口的查询全部
	public List<Levels> getAllLevels() {
		return this.levelsDAO.getAllLevels();
	}

	@Override // 继承接口的按条件精确查询
	public List<Levels> getLevelsByCond(Levels levels) {
		return this.levelsDAO.getLevelsByCond(levels);
	}

	@Override // 继承接口的按条件模糊查询
	public List<Levels> getLevelsByLike(Levels levels) {
		return this.levelsDAO.getLevelsByLike(levels);
	}

	@Override // 继承接口的按主键查询 返回Entity实例
	public Levels getLevelsById(String levelsid) {
		return this.levelsDAO.getLevelsById(levelsid);
	}

}

